module.exports = {
    apps: [
        {
            name: 'main',
            script: 'sh',
            args: [
                '-c',
                'while true; do sleep 1; echo `date`; done;'
            ],
            exec_interpreter: '',
            exec_mode: 'fork'
        }
    ]
}
