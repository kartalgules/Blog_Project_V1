import "../styles/BlogCard.css";

function BlogCard() {
  return (
    <div className="blog-container">
      <div className="content-header">
        <div className="blog-header">
          <h3>RTX 4090 Shipments Accelerated Ahead of Export Ban to China</h3>
          <div className="blog-detail">
            <p>Posted 01.01.2024 by <span>Profil</span></p>
            <p><b><i>0 View</i></b></p>
          </div>
        </div>
      </div>
      <div className="content">
          <div className="blog-image">
            <img
              src="https://blogger.googleusercontent.com/img/a/AVvXsEjCQmPbupWbTcX73ewyYyB-Gc5tAtD7GxQGO-ouiuhRbHwD_yzv6DqZtXWx4ZeKIibVPIvIrCI9mLa712I1e8d2OEfiUtMwHUyuHBNAcNjJSg0JTele9x9yn3UUM1g-RRtDZEsOWqjFJ9fwgTLb4k4OhlrCDjMVuHItVbwDjvQuDBW79WBfBwjxCUW5npLs"
              alt="RTX 4090"
            />
          </div>
          <div className="blog-content">
            <p>
              The trade tensions between the United States and China continue on
              various fronts. California-based technology giant NVIDIA has
              expedited shipments to China ahead of the export ban set to begin
              on November 17th. According to reports, NVIDIA has increased
              shipments of the GeForce RTX 4090 graphics card to China.
            </p>
          </div>
        </div>
    </div>
  );
}

export default BlogCard;
