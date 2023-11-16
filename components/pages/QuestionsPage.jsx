const React = require('react');
const Layout = require('../Layout');

function questionsPage({questions}){
    return(
        <Layout>
            {questions.map()}
        </Layout>
    )
}

module.exports = questionsPage