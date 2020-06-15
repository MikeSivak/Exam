// 44.	Пакет Express. Основные принципы
// работы. Запуск процесса операционной
// системы (exec), работа со стандартными
// потоками ввода/вывода.  Пример.

const exec = require('child_process').exec
const JewerlyStoreApp = exec('JewerlyStore', {
    cwd: 'E:\\3_course\\CourseWork(JewerlyStore_2019 (Final Version))\\Application\\JewerlyStore\\JewerlyStore\\bin\\Debug'
}, (err, stdout, stderr) => {
    if (stderr) {
        console.log(`stderr: ${stderr}`)
    } else {
        console.log(`stdout: ${stdout}`)
    }
})