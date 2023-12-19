import '../styles/BlogCard.css'

function BlogCard() {
  return (
    <div className="blog-container">
        <div className="blog-image">
            <img src="https://blogger.googleusercontent.com/img/a/AVvXsEjCQmPbupWbTcX73ewyYyB-Gc5tAtD7GxQGO-ouiuhRbHwD_yzv6DqZtXWx4ZeKIibVPIvIrCI9mLa712I1e8d2OEfiUtMwHUyuHBNAcNjJSg0JTele9x9yn3UUM1g-RRtDZEsOWqjFJ9fwgTLb4k4OhlrCDjMVuHItVbwDjvQuDBW79WBfBwjxCUW5npLs" alt="RTX 4090" />
        </div>
        <div className="blog-header">
            <h4>RTX 4090 Shipments Accelerated Ahead of Export Ban to China</h4>
        </div>
        <div className="blog-content">
            <p>The trade tensions between the United States and China continue on various fronts. California-based technology giant NVIDIA has expedited shipments to China ahead of the export ban set to begin on November 17th. According to reports, NVIDIA has increased shipments of the GeForce RTX 4090 graphics card to China.</p>
        </div>
        <div className="blog-detail">
            <span>Profil</span><span>01.01.2024</span><span>0 View</span>
        </div>
    </div>
  )
}

export default BlogCard;
