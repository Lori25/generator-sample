

const Generator = require('yeoman-generator')


module.exports = class extends Generator {
    prompting () {
        return this.prompt([{
            type: 'input',
            name: 'name',
            message: 'project name',
            default: this.appname  // 项目生成目录名称
        }]).then( answers => {
            this.answers = answers
        })
    }
    writing () {
        // yo 在生成文件阶段自动调用该方法
        // this.fs 高度封装的文件系统模块，功能更强大
        // this.fs.write(
        //     this.destinationPath('tmp.txt'),  // 写入路径
        //     Math.random().toString()  // 写入内容
        // )


        // 通过模板创建文件
        // const templ = this.templatePath('foo.txt')  // 模板文件路径
        // const output = this.destinationPath('foo.txt')  // 输出目标路径
        // const context = { title: 'test', bool: true }  // 模板数据上下文，模板需要的数据

        // this.fs.copyTpl(templ, output, context)


        // 通过模板创建文件
        const templ = this.templatePath('test.html')  // 模板文件路径
        const output = this.destinationPath('project.html')  // 输出目标路径
        const context = this.answers  // 模板数据上下文，模板需要的数据

        this.fs.copyTpl(templ, output, context)
    }
}
