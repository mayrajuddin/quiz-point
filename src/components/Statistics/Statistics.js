import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import {
    ResponsiveContainer,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    BarChart
} from 'recharts';
const Statistics = () => {
    const { data } = useLoaderData()
    return (
        <div>
            <Container>
                <div>
                    <h4 className='fs-3 text-center text-capitalize py-4'>Statistics Of Quiz</h4>
                </div>
                <div className='col-7 mx-auto'>
                    <ResponsiveContainer>
                        <BarChart
                            data={data}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <Bar dataKey="total" fill="#413ea0" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <CartesianGrid stroke="#f5f5f5" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </Container>
        </div>
    );
};

export default Statistics;