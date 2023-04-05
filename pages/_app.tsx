import App, { AppContext, AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createEmotionCache from "@/helpers/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import { wrapper } from "@/store/store";
import { Box, createTheme, GlobalStyles } from "@mui/material";
import lightThemeOptions from "@/theme/lightThemeOptions";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { Mode } from "@/models/app";
import darkThemeOptions from "@/theme/darkThemeOptions";
import { useEffect, useState } from "react";
import ScrollToTop from "@/components/common/ScrollToTop";
import { Cookies, Routes } from "@/constants/enums";
import { CookieValueTypes, getCookie } from "cookies-next";
import { setAccessToken, setRefreshToken, setUser } from "@/store/appSlice";
import { DefaultSeo } from "next-seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// English Font Family
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// Arabic Font Family
import "@fontsource/tajawal/300.css";
import "@fontsource/tajawal/400.css";
import "@fontsource/tajawal/500.css";
import "@fontsource/tajawal/700.css";

// import { setSession } from '@/store/appSlice';

function getActiveTheme(themeMode: Mode, locale: any) {
  return themeMode === "light"
    ? createTheme(lightThemeOptions(locale))
    : createTheme(darkThemeOptions(locale!));
}

const MyApp = ({ Component, ...rest }: AppProps) => {
  const [burger, setBurger] = useState<boolean>(false);
  const openBurgerNav = () => {
    setBurger(true);
  };
  const closeBurgerNav = () => {
    setBurger(false);
  };
  const { locale } = useRouter();
  const [activeTheme, setActiveTheme] = useState(
    getActiveTheme("dark", locale!)
  );
  const [selectedTheme, setSelectedTheme] = useState<Mode>("light");

  const toggleTheme: React.MouseEventHandler<HTMLAnchorElement> = () => {
    const desiredTheme = selectedTheme === "light" ? "dark" : "light";

    setSelectedTheme(desiredTheme);
  };

  useEffect(() => {
    setActiveTheme(getActiveTheme(selectedTheme, locale!));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTheme]);

  const { store, props } = wrapper.useWrappedStore(rest);

  const clientSideEmotionCache = createEmotionCache(locale!);
  const { emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={activeTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <GlobalStyles
            styles={{
              ".MuiAccordionSummary-root .MuiAccordionSummary-content": {
                margin: "12px 8px !important"
              },
              ".MuiAccordionSummary-root .MuiAccordionSummary-content.Mui-expanded":
                {
                  margin: "12px 8px !important"
                },
              ".MuiAccordionSummary-root.Mui-expanded": {
                minHeight: "0 !important"
              },
              ".MuiAccordionSummary-root.Mui-expanded .MuiTypography-root": {
                marginLeft: "0 !important"
              }
            }}
          />
          {/* we can use the DefaultSeo component, instead of manually adding the properties individually to each page. We can also override any property on a page, if needed. */}
          <DefaultSeo
            title="Noot | Digital Solutions Provider"
            titleTemplate="Noot | %s"
            description="Digital Solutions Provider - Our website offers a range of digital solutions for businesses seeking innovative software development, web design, and IT services"
            openGraph={{
              type: "website",
              locale: "en-US",
              url: "https://www.noot.ae/",
              siteName: "Noot"
            }}
            twitter={{
              handle: "@handle",
              site: "@site",
              cardType: "summary_large_image"
            }}
          />
          <Box sx={{ minHeight: "100vh", maxHeight: "100%" }}>
            <Header
              openBurgerNav={openBurgerNav}
              closeBurgerNav={closeBurgerNav}
              burger={burger}
            />
            <Component {...pageProps} />
            <Footer />
          </Box>
        </ThemeProvider>
        <ScrollToTop />
      </CacheProvider>
    </Provider>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store) => async (appContext: AppContext) => {
    const ctx = await App.getInitialProps(appContext);

    if (!appContext.router.route.includes(Routes.AUTH)) {
      console.log("Not in accounts");
      const cookieAccessToken: CookieValueTypes = getCookie(
        Cookies.ACCESS_TOKEN,
        {
          req: appContext.ctx.req,
          res: appContext.ctx.res
        }
      );
      const cookieRefreshToken: CookieValueTypes = getCookie(
        Cookies.ACCESS_TOKEN,
        {
          req: appContext.ctx.req,
          res: appContext.ctx.res
        }
      );
      const cookieSessionUser: CookieValueTypes = getCookie(
        Cookies.SESSION_USER,
        {
          req: appContext.ctx.req,
          res: appContext.ctx.res
        }
      );

      if (
        cookieAccessToken === undefined &&
        cookieRefreshToken === undefined &&
        cookieSessionUser === undefined
      ) {
      } else {
        const sessionUser: any = JSON.parse(cookieSessionUser as string);
        store.dispatch(setAccessToken(cookieAccessToken as string));
        store.dispatch(setRefreshToken(cookieRefreshToken as string));
        store.dispatch(setUser(sessionUser));
      }
    }

    return { ...ctx };
  }
);

export default MyApp;
