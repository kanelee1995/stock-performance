import MaterialTable from "material-table";

const StockNews = ({ news }) => {
  const columns = [
    {
      title: "Date",
      field: "published_utc",
    },
    {
      title: "Tickers",
      field: "tickers",
    },
    {
      title: "Title",
      field: "title",
      // render: rowData => <a href={rowData.article_url}>{rowData.title}</a>,
    },
  ];

  return (
    <div className="news">
      <MaterialTable
        columns={columns}
        data={news}
        title="Ticker News"
        options={{
          search: false,
          headerStyle: { backgroundColor: "#696868", color: "#FFF" },
          rowStyle: { backgroundColor: "#696868", color: "#FFF" },
        }}
      />
    </div>
  );
};

export default StockNews;
