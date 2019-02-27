import React from 'react';
import {Table} from 'antd';
import {Link} from 'react-router-dom';

function alphabetSorter(a, b, dataSetKey) {
  if (a[dataSetKey] < b[dataSetKey]) {
    return -1;
  }
  if (a[dataSetKey] > b[dataSetKey]) {
    return 1;
  }

  return 0;
}

class CountryList extends React.Component {

  getTableColumns(state) {
    return [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => {
          return alphabetSorter(a, b, 'name')
        }
      },
      {
        title: 'Population',
        dataIndex: 'population',
        key: 'population',
        sorter: (a, b) => a.population - b.population,
        render: population => population.toLocaleString()
      },
      {
        title: 'Region',
        dataIndex: 'region',
        key: 'region',
        sorter: (a, b) => {
          return alphabetSorter(a, b, 'region');
        },
      },
      {
        title: 'Subregion',
        dataIndex: 'subregion',
        key: 'subregion',
        sorter: (a, b) => {
          return alphabetSorter(a, b, 'subregion');
        },
      },
      {
        title: 'Languages',
        dataIndex: 'languages',
        key: 'languages',
        render: languages => {
          return languages.map(language => (
            <div key={language.iso639_1}>{language.iso639_1.toUpperCase()}</div>
          ))
        }
      },
      {
        title: 'Actions',
        dataIndex: null,
        key: 'actions',
        render: country => <Link to={`/${country.alpha3Code}`}>Read more</Link>,
      }
    ];
  }

  render() {
    const columns = this.getTableColumns(this.state);

    return (
      <Table dataSource={this.props.data} columns={columns}
             rowKey="alpha2Code"/>
    )
  }

}

export default CountryList;