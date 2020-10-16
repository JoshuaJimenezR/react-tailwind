import React,{Component} from 'react';

class PageHeader extends Component {
    render() {
        const { title, children ,description } = this.props;
        return (
            <div className="lg:flex lg:items-center lg:justify-between mb-5">
                <div className="flex-1 min-w-0 mb-5">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
                        { title }
                    </h2>
                    <p className="text-gray-600">{description}</p>
                </div>
                { children &&
                <div className="mt-5 flex lg:mt-0 lg:ml-4">
                    {children}
                </div>
                }
            </div>
        );
    }
}

export default PageHeader;
