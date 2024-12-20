import Logo from './components/icons/Logo'

export default {
    head: 
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="Docs | TopwebTools" />
            <meta property="og:description" content="Documentation for TopwebTools Api" />
        </>
    ,
    banner: {
        key: '2.0-release',
        content: (
          <a href="https://topwebtools.online/docs/deriv/apikeys" target="_blank">
            🎉 Deriv Aviator 1.0 is released. Read more →
          </a>
        )
      },
    logo: <div style={{ display: 'flex', alignItems: 'center', flexDirection: "row", columnGap: "10px" }}>
        <Logo />
        <div style={{ display: 'flex', fontWeight: 900}}>
            TOPWEBTOOLS
        </div>
        
    </div>,
    footer: {
        content: (
          <span>
           TWT {new Date().getFullYear()} ©{' '}
            <a href="https://nextra.site" target="_blank">
              Topwebtools
            </a>
            .
          </span>
        )
      }
    
}