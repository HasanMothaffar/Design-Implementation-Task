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
        borderTop: "5px solid #f00",
        borderRight: "5px solid #fff",
        borderBottom: "5px solid #fff",
        borderLeft: "5px solid #fff",
    },

    {
        id: 2,
        title: "Basic Package",
        properties: sharedProperties,
        color: "yellow",
        borderTop: "5px solid yellow",
        borderRight: "5px solid yellow",
        borderBottom: "5px solid #fff",
        borderLeft: "5px solid #fff",
    },

    {
        id: 3,
        title: "Basic Package",
        properties: sharedProperties,
        color: "blue",
        borderTop: "5px solid blue",
        borderRight: "5px solid blue",
        borderBottom: "5px solid blue",
        borderLeft: "5px solid #fff",
    },

    {
        id: 4,
        title: "Basic Package",
        properties: sharedProperties,
        color: "green",
        borderTop: "5px solid green",
        borderBottom: "5px solid green",
        borderRight: "5px solid green",
        borderLeft: "5px solid green",
    },
];

export const useGetPackages = () => {
    return {
        packages,
    };
};
