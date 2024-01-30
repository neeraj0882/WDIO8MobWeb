
class Dataimport {
    async importWebData(dataFileName: string) {
        const data = await import('../../web/testData/' + process.env.Prj + '/' + process.env.Env + '/' + dataFileName + '.json', { assert: { type: "json" }, });
        return data;
    }
    async importNativeData(dataFileName: string, projName: string) {
        //  const data = await import('../../native/testData/' + process.env.Prj + '/' + process.env.Env + '/' + dataFileName + '.json', { assert: { type: "json" }, });
        const data = await import('../../native/testData/' + projName + '/' + process.env.Env + '/' + dataFileName + '.json', { assert: { type: "json" }, });
        return data;
    }

}
export default new Dataimport()