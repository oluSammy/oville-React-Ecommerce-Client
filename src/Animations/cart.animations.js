export const cartVariants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            transition: 'easeInOut',
            duration: 1,
            staggerChildren: .4,
            x: 0
        }
    },
    exit: {
        x: '-100vh',
        transition: { ease: 'easeInOut' }
    }
}

export const cartChildVariants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    }
}