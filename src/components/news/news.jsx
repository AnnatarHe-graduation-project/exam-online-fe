import React from 'react'
import { Link } from 'react-router'
import styles from './news.css'

const NewsTable = ({ news }) => {
    return (
        <div className={styles.newsRecord}>
            <h2 className={styles.head}>新闻列表</h2>
            <table className={styles.newsTable}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>名称</td>
                        <td>点赞</td>
                    </tr>
                </thead>
                <tbody>
                    { news.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.ID}</td>
                                <td>
                                    <Link to={`/news/${item.ID}`}>{item.title}</Link>
                                </td>
                                <td>
                                    <i className="fa fa-lg fa-thumbs-o-up" />
                                    <span>{item.up}</span>
                                </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

NewsTable.propTypes = {
    news: React.PropTypes.arrayOf(React.PropTypes.shape({
        ID: React.PropTypes.number,
        title: React.PropTypes.string,
        up: React.PropTypes.number
    }))
}

export default NewsTable

