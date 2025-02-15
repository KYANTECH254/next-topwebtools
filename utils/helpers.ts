import crypto from 'crypto';

export const getURL = (path: string = '') => {
  // Determine the base URL based on the environment.
  let url;

  if (process.env.NODE_ENV !== 'production') {
    // Use localhost during development or testing.
    url = 'http://localhost:3000';
  } else {
    // Use NEXT_PUBLIC_SITE_URL if set and non-empty.
    url =
      process?.env?.NEXT_PUBLIC_SITE_URL?.trim() ||
      // Otherwise, use NEXT_PUBLIC_VERCEL_URL if set.
      process?.env?.NEXT_PUBLIC_VERCEL_URL?.trim() ||
      // Default to localhost if nothing is set (fallback safety).
      'http://localhost:3000';
  }

  // Trim trailing slashes from the URL.
  url = url.replace(/\/+$/, '');
  // Ensure `http` or `https` is included in the URL.
  url = url.includes('http') ? url : `https://${url}`;
  // Trim leading slashes from the path to avoid double slashes.
  path = path.replace(/^\/+/, '');

  // Return the final concatenated URL.
  return path ? `${url}/${path}` : url;
};

export const postData = async ({
  url,
  data
}: {
  url: string;
  data?: { price: any };
}) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'same-origin',
    body: JSON.stringify(data)
  });

  return res.json();
};

export const toDateTime = (secs: number) => {
  var t = new Date(+0); // Unix epoch start.
  t.setSeconds(secs);
  return t;
};

export const calculateTrialEndUnixTimestamp = (
  trialPeriodDays: number | null | undefined
) => {
  // Check if trialPeriodDays is null, undefined, or less than 2 days
  if (
    trialPeriodDays === null ||
    trialPeriodDays === undefined ||
    trialPeriodDays < 2
  ) {
    return undefined;
  }

  const currentDate = new Date(); // Current date and time
  const trialEnd = new Date(
    currentDate.getTime() + (trialPeriodDays + 1) * 24 * 60 * 60 * 1000
  ); // Add trial days
  return Math.floor(trialEnd.getTime() / 1000); // Convert to Unix timestamp in seconds
};

const toastKeyMap: { [key: string]: string[] } = {
  status: ['status', 'status_description'],
  error: ['error', 'error_description']
};

const getToastRedirect = (
  path: string,
  toastType: string,
  toastName: string,
  toastDescription: string = '',
  disableButton: boolean = false,
  arbitraryParams: string = ''
): string => {
  const [nameKey, descriptionKey] = toastKeyMap[toastType];

  let redirectPath = `${path}?${nameKey}=${encodeURIComponent(toastName)}`;

  if (toastDescription) {
    redirectPath += `&${descriptionKey}=${encodeURIComponent(toastDescription)}`;
  }

  if (disableButton) {
    redirectPath += `&disable_button=true`;
  }

  if (arbitraryParams) {
    redirectPath += `&${arbitraryParams}`;
  }

  return redirectPath;
};

export const getStatusRedirect = (
  path: string,
  statusName: string,
  statusDescription: string = '',
  disableButton: boolean = false,
  arbitraryParams: string = ''
) =>
  getToastRedirect(
    path,
    'status',
    statusName,
    statusDescription,
    disableButton,
    arbitraryParams
  );

export const getErrorRedirect = (
  path: string,
  errorName: string,
  errorDescription: string = '',
  disableButton: boolean = false,
  arbitraryParams: string = ''
) =>
  getToastRedirect(
    path,
    'error',
    errorName,
    errorDescription,
    disableButton,
    arbitraryParams
  );

export const generatePlatformId = (): string => {
  return crypto.randomBytes(16).toString('hex'); 
};

export const generatePublicKey = (): string => {
  return crypto.randomBytes(32).toString('hex'); 
};

export const generateUserId = (): string => {
  return crypto.randomBytes(5).toString('hex');
};