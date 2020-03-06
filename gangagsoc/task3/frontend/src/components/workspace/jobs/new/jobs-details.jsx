import React from 'react'
import Prism from 'prismjs/components/prism-core'
import 'prismjs/components/prism-python'
const jobs = `
Job (
    outputsandbox = []  ,
    comment = '',
    id = 30,
    status = 'new',
    name = '',
    inputdir = '/Users/ank/gangadir/workspace/ank/LocalXML/30/input/',
    outputdir = '/Users/ank/gangadir/workspace/ank/LocalXML/30/output/',
    do_auto_resubmit = False,
    parallel_submit = True,
    inputsandbox = []  ,
    info =    JobInfo (
      submit_counter = 0,
      uuid = '',
      monitoring_links = []  ,
      monitor =None
    ) ,
    time =    JobTime (
      timestamps = '\n         Time (UTC)   Status\n- - - - - - - - - - - - - - - - - - - - - \n2020/03/06 18:02:46 - new\n' 
    ) ,
    application =    Executable (
      exe = 'echo',
      args = [Hello World]  ,
      env = {},
      platform = 'ANY',
      is_prepared = None,
      hash = None
    ) ,
    backend =    Local (
      id = -1,
      exitcode = None,
      workdir = '',
      actualCE = '',
      nice = 0,
      force_parallel = False
    ) ,
    inputfiles = []  ,
    outputfiles = []  ,
    inputdata =None,
    outputdata =None,
    splitter =None,
    subjobs = 'Registry Slice: jobs(30).subjobs (0 objects)\n' ,
    postprocessors = [] ,
    virtualization =None,
    metadata = {} 
  )
`.trim()

class JobsDetails extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        Prism.highlightAll()
    }

    render(){
        return(
            <pre lassName="line-numbers">
                <div className="pre-title">Job details</div>
                <code className="language-python">
                    {jobs}
                </code>
            </pre>
        )
    }
}

export default JobsDetails