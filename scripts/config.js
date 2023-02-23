const defaultCollections = [
    {
        title: "users",
        value: []
    },
    {
        title: "forms",
        value: []
    }   
]

const uid = () => [Date.now().toString(36), Math.random().toString(36).substring(2)].join('')

export { defaultCollections , uid }
