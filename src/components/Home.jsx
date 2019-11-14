import React from 'react';
import { ReactComponent as ComponentsIcon } from '../images/components.svg';
import { ReactComponent as StylesIcon } from '../images/styles.svg';
import { ReactComponent as BlogsIcon } from '../images/blogs.svg';
import { ReactComponent as TutorialsIcon } from '../images/tutorials.svg';
import { ReactComponent as Kendoka } from '../images/kendoka.svg';

const Home = (props) => {
    return (
        <div className="container mt-5">
            <div className='row'>
                <div className='col-12'>
                    <h1 className='welcome mb-0'>Welcome to KendoReact</h1>
                    <h2 className='sub-header mt-0'>This is a sample application built with KendoReact - a set of over 60 UI components built from the ground-up specifically for React.</h2>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='get-started'>Get Started</h1>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-4 text-right'>
                    <div className='kendoka-div'>
                        <Kendoka/>
                    </div>
                </div>
                <div className='col-4 components-list'>
                    <p>
                        <ComponentsIcon/>
                        <a href='https://www.telerik.com/kendo-react-ui/components/?utm_medium=cpm&utm_source=stackblitz-app&utm_campaign=kendo-ui-react-trial-docs-and-demos'>Components & Documentation</a>
                    </p>
                    <p>
                        <StylesIcon/>
                        <a href='https://www.telerik.com/kendo-react-ui/components/styling/?utm_medium=cpm&utm_source=stackblitz-app&utm_campaign=kendo-ui-react-trial-styling'>KendoReact Themes Overview</a>
                    </p>
                    <p>
                        <BlogsIcon/>
                        <a href='https://www.telerik.com/blogs/tag/react?utm_medium=cpm&utm_source=stackblitz-app&utm_campaign=kendo-ui-react-blog-react-blogs'>Blog Posts</a>
                    </p>
                    <p>
                        <TutorialsIcon/>
                        <a href='https://www.telerik.com/kendo-react-ui/react-hooks-guide/?utm_medium=cpm&utm_source=stackblitz-app&utm_campaign=kendo-ui-react-blog-react-hooks-pp'>Tutorials</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;