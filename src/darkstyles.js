const darkstyles = `
body{
  background:#333;
  }
.first-block, .news, .description-directions {
  background: #333;
}
.directions-card, .news-card  {
  background:#ccc;
}
.first_block-title,.first_block-name,.info-people-status{
  color:#ccc;
}
.department-history-info-description, .info-la-name-secondName, .department-history-info-title,.info-la-status,
.counter-label,.description-directions-title,.list-teachers-title,.info-people-name-secondName, .news-tab
{
 color: white;
}
.news-tab:not(:first-child) {
  border-left: 2px solid #ccc;
}
.header-menu div:not(:last-child){
  color:white;
}
.directions-card{
  border-radius: 60px;
}
.news-link a,.schedule-link a,.questions-link a{
  color:white;
}
.header-menu a{
  color:white;
}
.list-teachers-grid{
  color:white;
}
.hide + label{
  background:#ccc;
}

`
export default darkstyles