import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const useMobileAccordion = () => {

  const mobileAccordion =(id:number)=>{
    if (id === 1) {
      gsap.to(window, {
        duration: 0.1,
        scrollTo: { y: "#website_accordion", offsetY: 0 },
      });
    }
    if (id === 2) {
      gsap.to(window, {
        duration: 0.1,
        scrollTo: { y: "#apps_accordion", offsetY: 0 },
      });
    }
    if (id === 3) {
      gsap.to(window, {
        duration: 0.1,
        scrollTo: { y: "#ecom_accordion", offsetY: 0 },
      });
    }
    if (id === 4) {
      gsap.to(window, {
        duration: 0.1,
        scrollTo: { y: "#strategy_accordion", offsetY: 0 },
      });
    }
  }

  const caseMobileAccordion=(i:number)=>{
    if (i === 0) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#case", offsetY: 0 },
      });
    }
    if (i === 1) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#case", offsetY: -60 },
      });
    }
  }

  return {mobileAccordion,caseMobileAccordion}
};

export default useMobileAccordion;
