const user = {
    /**
     * 数据库创建用户
     * @param  {object} model 用户数据模型
     * @return {object}       mysql执行结果
     */
    async create(model: any) {
        let result = console.log('insertData', model);
        return result
    },

    /**
     * 数据库删除用户
     * @param  {object} model 用户数据模型
     * @return {object}       mysql执行结果
     */
    async delete(model: any) {
        let result = console.log('deleteData', model);
        return result
    },

    /**
     * 数据库更新用户
     * @param  {object} model 用户数据模型
     * @return {object}       mysql执行结果
     */
    async update(model: any) {
        let result = console.log('updateData', model);
        return result
    }
}
export default user;