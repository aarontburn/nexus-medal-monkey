module.exports = {
    excluded: ["electron.ts"],
    included: [],
    build: {
        name: "Medal Monkey",
        id: "aarontburn.Medal_Monkey",
        process: "./process/main.js",
        replace: [
            {
                from: "{EXPORTED_MODULE_ID}",
                to: "%id%",
                at: ["./process/main.ts"]
            },
            {
                from: "{EXPORTED_MODULE_NAME}",
                to: "%name%",
                at: ["./process/main.ts", "./module-info.json"]
            }
        ]
    }
}