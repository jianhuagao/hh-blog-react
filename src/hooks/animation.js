import { useSpring,useTransition } from "react-spring";

export const useFromRight = () => {
  return useSpring({
    opacity: 1,
    transform: "translateX(0px)",
    from: { opacity: 0, transform: "translateX(40px)" },
  })
};

export const useFromBottom = () => {
  return useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(40px)" }
  })
} 

export const useTran = items=>{
  return useTransition(items, item => item.id, {
    from: { transform: 'translate3d(0,-70px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0,-40px,0)' },
    })
}