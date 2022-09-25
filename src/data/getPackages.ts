const sharedProperties = [
    {
        title: "Disk Space",
        content: "20 GB",
    },

    {
        title: "Subdomains",
        content: "20",
    },

    {
        title: "Transfer (GB)",
        content: "20 GB",
    },

    {
        title: "Databases",
        content: "2",
    },

    {
        title: "Dashboards",
        content: "",
    },

    {
        title: "Control Panel & FTP",
        content: "",
    },

    {
        title: "Free Support",
        content: "",
    },
];

const packages = [
    {
        id: 1,
        title: "Basic Package",
        properties: sharedProperties,
        color: "red",
    },

    {
        id: 2,
        title: "Basic Package",
        properties: sharedProperties,
        color: "yellow",
    },

    {
        id: 3,
        title: "Basic Package",
        properties: sharedProperties,
        color: "blue",
    },

    {
        id: 4,
        title: "Basic Package",
        properties: sharedProperties,
        color: "green",
    },
];

export const useGetPackages = () => {
    return {
        packages,
    };
};
