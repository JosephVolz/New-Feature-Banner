import "../assets/css/tooltip.css"; // make sure to import your CSS file

const TooltipSpan = () => {
  return (
    <div class="tooltip">
      <div className="info-icon">ℹ️</div>
      <div className="tooltip-content">
        <span class="tooltiptext">
          Lorem Ipsum is simply dummy text of the printing…
        </span>
      </div>
    </div>
  );
};

export default TooltipSpan;
