const env=process.env.REACT_APP_ENV;
console.log(process.env)
console.log (process.env.REACT_APP_ENV)

let config={
    baseURL:"http://localhost"
}

switch(env.toUpperCase()){
    case "PRODUCTION":
        config.baseURL="https://skillsunion.com"
        break;
    case "STAGE":{
        config.baseURL="https://stage.skillsunion.com"
        break;
    }
}


export default config