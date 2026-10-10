const Card = ({ id, article = {} }) => {
    return (
        <div className="card">
            <div className="card-header" id={`heading${id}`}>
                <h5 className="mb-0">
                    <a className="collapsed" href="#" data-toggle="collapse" data-target={`#collapse${id}`} aria-expanded="false" aria-controls={`collapse${id}`}>
                        {article.en_title}
                        <br />
                        {article.tr_title}
                    </a>
                </h5>
            </div>
            <div id={`collapse${id}`} className="collapse" aria-labelledby={`heading${id}`} data-parent="#accordionDefault">
                <div className="card-body">
                    <table className="table table-bordered table-striped">
                        <tbody>
                            <tr>
                                <th>Özet</th>
                                <td>
                                    {article.abstract}
                                </td>
                            </tr>
                            <tr>
                                <th>Kısa Özet</th>
                                <td>
                                    {article.abstract_sum}
                                </td>
                            </tr>
                            <tr>
                                <th>Araştırma Soruları</th>
                                <td>
                                    <ul>
                                        {
                                            article.rqs?.map((rq, index) => (
                                                <li key={`${id}_rq_${index}`}>
                                                    {rq}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th>Problem</th>
                                <td>
                                    <ul>
                                        {
                                            article.problems?.map((problem, index) => (
                                                <li key={`${id}_problem_${index}`}>
                                                    {problem}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th>Yöntem</th>
                                <td>
                                    <ul>
                                        {
                                            article.method?.map((mthd, index) => (
                                                <li key={`${id}_mthd_${index}`}>
                                                    {mthd}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th>Sonuçlar</th>
                                <td>
                                    <ul>
                                        {
                                            article.results?.map((result, index) => (
                                                <li key={`${id}_result_${index}`}>
                                                    {result}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th>Önerilen Çalışmalar</th>
                                <td>
                                    <ul>
                                        {
                                            article.suggestions?.map((suggestion, index) => (
                                                <li key={`${id}_suggestion_${index}`}>
                                                    {suggestion}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Card