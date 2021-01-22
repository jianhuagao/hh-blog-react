import { useSpring } from "react-spring";

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
  });
}

// export const useTran = items=>{
//   return useTransition(items, item => item.id, {
//     from: { transform: 'translate3d(0,-70px,0)' },
//     enter: { transform: 'translate3d(0,0px,0)' },
//     leave: { transform: 'translate3d(0,-40px,0)' },
//     })
// }

export const useHov = () => {
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
  ];

  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const spring = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 550, friction: 50 },
  }))

  const ret = [...spring,calc,trans];
  return ret;
}