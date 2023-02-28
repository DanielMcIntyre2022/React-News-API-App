
function NewsDisplay({news}) {

 console.log(news)

  return (
    <div>
        {news.map(n => (
            <p>{n.title}</p>
        ))}
    </div>
  )
};

export default NewsDisplay;