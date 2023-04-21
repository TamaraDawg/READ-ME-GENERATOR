
class MarkDown {
    static genread(data){
        return `
        # ${answers.title}
        
        ## Table of Contents
        - [Project description](#Description)
        - [Usage](#Usage)  
        - [Contributing](#Contribution)
        -[Installation](#Installation)
        -[Questions](#Questions)
        -[License](#License)
        
        ## Description
        ${answers.description}

        ## Usage
        ${answers.usage}

        ## Installation
        ${answers.installation}

        ## Contributing
        ${answers.contribution}

        ## Questions 
        ${answers.email}
        ${answers.github}

        ## License 
        ${answers.license}

        `
    }
}

module.exports = MarkDown