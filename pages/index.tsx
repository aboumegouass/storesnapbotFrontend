import type { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from "react-i18next";
import AppLayout from '../layouts/AppLayout'
import PageHeader from '../components/PageHeader'
import { Table, Tag, Space } from 'antd';
import OrderPost from '../components/OrderPost';
import { Alert } from '../components/Alert/Alert';
import Link from 'next/link';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: any) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: any) => (
      <>
        {tags.map((tag: any) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text: any, record: any) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <AppLayout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white p-4 mt-3' style={{ overflow: 'hidden' }}>
        <Alert type='success'>
          <p className="text">
            <span className="material-icons material-icons-outlined">task_alt</span>
            <strong>{t('lorem_title')}</strong>
            {t('lorem_text')}</p>
        </Alert>
        <div className="row">
          <div className="col-md-4">
            <PageHeader title={t('latest_orders_text')} size='xs' showAllText={t('show_all_text')} link='/orders' />
            <div className="app-panel">
              <div className="app-panel-content is-list">
                <OrderPost
                  time={'2022-03-07T09:21:53.000000Z'}
                  title='Order #746846486'
                  id={7}
                  type={0}
                />
                <OrderPost
                  time={'2022-03-07T09:21:53.000000Z'}
                  title='Order #100846477'
                  id={2}
                  type={2}
                />
                <OrderPost
                  time={'2022-03-07T09:21:53.000000Z'}
                  title='Order #7409000486'
                  id={2}
                  type={3}
                />
                <OrderPost
                  time={'2022-03-07T09:21:53.000000Z'}
                  title='Order #185488120'
                  id={2}
                  type={1}
                />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <PageHeader title={t('latest_products_text')} size='xs' showAllText={t('show_all_text')} link='/orders' />
            <div className="app-panel">
              <div className="app-panel-content is-list">
                <table className='table'>
                  <thead>
                    <tr>
                      <th>{t('product_name_title')}</th>
                      <th>{t('product_price_text')}</th>
                      <th>{t('product_quantity')}</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Capaccino</td>
                      <td>10.55$</td>
                      <td>23</td>
                    </tr>
                    <tr>
                      <td>Pizza</td>
                      <td>32$</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>Milk</td>
                      <td>89.99$</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td>Hamberger</td>
                      <td>33.99$</td>
                      <td>2K</td>
                    </tr>
                    <tr>
                      <td>Chokolate</td>
                      <td>12.66$</td>
                      <td>41K</td>
                    </tr>
                    <tr>
                      <td>Others</td>
                      <td>43$</td>
                      <td>59K</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="app-panel-colored" style={{ backgroundImage: `url('/background2.jpg')` }}>
              <h3 className="title">{t('categories_count_text')}</h3>
              <h4 className="item-num">
                <strong>{t('main_categories_count_text')}</strong>
                <span className='me-auto'>19</span>
              </h4>
              <h4 className="item-num">
                <strong>{t('sub_categories_count_text')}</strong>
                <span className='me-auto'>543</span>
              </h4>
            </div>
            <div className="app-panel-colored white">
              <h3 className="title">{t('generale_statistic_text')}</h3>
              <h4 className="item-num">
                <strong>{t('branches_count_text')}</strong>
                <span className='me-auto'>19</span>
              </h4>
              <h4 className="item-num">
                <strong>{t('orders_count_text')}</strong>
                <span className='me-auto'>543</span>
              </h4>
              <h4 className="item-num">
                <strong>{t('products_count_text')}</strong>
                <span className='me-auto'>543</span>
              </h4>
            </div>
            <div className="py-2">
              <Link href={'/'}>
                <a className='btn butt-lg butt-primary2 flex-just-center' style={{ flexDirection: 'row' }}>
                  <span className="material-icons material-icons-outlined">assessment</span>
                  {t('see_all_statistic_text')}
                </a>
              </Link>
            </div>
          </div>
        </div>
        <PageHeader title={t('branches_title')} />
        <Table columns={columns} dataSource={data} />
      </main>

    </AppLayout>
  )
}

export default Home
