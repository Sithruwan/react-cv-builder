export const slideIn = {
    initial: {
        opacity: 0,
        x: -100,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 50,
        },
    },
    exit:{
       
        opacity: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 50,
        }
    }
};

