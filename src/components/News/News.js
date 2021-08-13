import React from 'react'
import List from '@material-ui/core/List'
import { useDispatch, useSelector } from 'react-redux'
import { NEWS_REQUEST_STATUS } from '../store/News/reducer'
import './style.css'

export default function News(props) {
    const { status, list } = useSelector((state) => state.news)

    return (
        <div>
            <p className='pTitle'>News page</p>

            {status !== NEWS_REQUEST_STATUS.ERROR ? (
                <List className="bordered">
                    {list.map((newsItem) => (
                        <li key={newsItem.id}>
                            <p>{newsItem.title}</p>
                        </li>
                    ))}
                </List>
            ) : (
                <p>ERROR!!!</p>
            )}
        </div>
    )
}