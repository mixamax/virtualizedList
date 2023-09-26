export function RowsMaker(data, Component, start, visibleRows) {
    return data
        .slice(start, start + visibleRows + 1)
        .map((data) => <Component key={data.id} data={data} />);
}
