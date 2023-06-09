import { createStyles, rem } from '@mantine/core';

const useHeroStyles = createStyles((theme) => ({
    inner: {
        display: 'flex',
        paddingTop: `calc(${theme.spacing.xl} * 1)`,
        paddingBottom: `calc(${theme.spacing.xl} * 4)`,
        alignItems: 'center',

        [theme.fn.smallerThan('md')]: {
            flexDirection: 'column',
            padding: theme.spacing.xl,
        },
    },

    content: {
        maxWidth: rem(480),
        marginRight: `calc(${theme.spacing.xl} * 3)`,

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            marginRight: 0,
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: rem(44),
        lineHeight: 1.2,
        fontWeight: 900,

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(28),
        },
    },

    control: {
        [theme.fn.smallerThan('xs')]: {
            flex: 1,
        },
    },

    image: {
        [theme.fn.smallerThan('md')]: {
            marginTop: theme.spacing.xl,
        },
    },

    highlight: {
        position: 'relative',
        backgroundColor: theme.fn.variant({
            variant: 'light',
            color: theme.primaryColor,
        }).background,
        borderRadius: theme.radius.sm,
        padding: `${rem(4)} ${rem(12)}`,
    },
}));

export { useHeroStyles };
