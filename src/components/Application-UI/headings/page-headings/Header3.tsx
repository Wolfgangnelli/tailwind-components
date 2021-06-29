import React from 'react'
import BtnLight from '../../elements/buttons/BtnLight'

const Header3 = () => {
    return (
        <header className="sm:p-1 max-w-7xl mx-auto bg-blue-50">
            <div className="lg:flex lg:items-center lg:justify-between">
                <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">H2 Title</h2>
                    <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                        <div>text</div>
                        <div>text</div>
                        <div>text</div>
                        <div>text</div>
                    </div>
                </div>
                <div className="mt-5 flex lg:mt-0 lg:ml-4">
                    <span className="hidden sm:block">
                        <BtnLight name="Edit">
                            <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" x-description="Heroicon name: solid/link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"></path>
                            </svg>
                        </BtnLight>
                    </span>
                    <span className="hidden sm:block ml-3">
                        <BtnLight name="View">
                            <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" x-description="Heroicon name: solid/pencil" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                            </svg>
                        </BtnLight>
                    </span>
                    <span className="sm:ml-3"></span>
                </div>
            </div>
        </header>
    )
}

export default Header3
