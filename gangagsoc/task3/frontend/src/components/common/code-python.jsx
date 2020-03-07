import React from 'react'
import Prism from 'prismjs/components/prism-core'
import 'prismjs/components/prism-python'

class CodePython extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        Prism.highlightAll()
    }

    render(){
        const { code, heading } = this.props
        return(
            <pre lassName="line-numbers">
                <div className="pre-title">{heading}</div>
                <code className="language-python">
                    {code}
                </code>
            </pre>
        )
    }
}

CodePython.defaultProps = {
    code : "",
    heading: ""
}

export default CodePython