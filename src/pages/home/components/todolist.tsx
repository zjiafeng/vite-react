import React, { useState } from 'react';

function SortableTable() {
    const [data, setData] = useState([
        { id: 1, name: 'John', age: 30 },
        { id: 2, name: 'Alice', age: 25 },
        { id: 3, name: 'Bob', age: 35 },
        // Add more data as needed
    ]);
    const [sortBy, setSortBy] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc'); // or 'desc' for descending

    // Function to handle sorting based on a given field
    const handleSort = (field: any) => {
        // Toggle sort direction if the same field is clicked again
        const newSortDirection = sortBy === field ? (sortDirection === 'asc' ? 'desc' : 'asc') : 'asc';

        // Sort the data based on the field and direction
        const sortedData = [...data].sort((a: any, b: any) => {
            if (newSortDirection === 'asc') {
                return a[field] - b[field];
            } else {
                return b[field] - a[field];
            }
        });

        setData(sortedData);
        setSortBy(field);
        setSortDirection(newSortDirection);
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th onClick={() => handleSort('id')}>ID {sortBy === 'id' && `(${sortDirection})`}</th>
                        <th onClick={() => handleSort('name')}>Name {sortBy === 'name' && `(${sortDirection})`}</th>
                        <th onClick={() => handleSort('age')}>Age {sortBy === 'age' && `(${sortDirection})`}</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SortableTable;
