import { LineChart as LChart, Line,XAxis,YAxis,CartesianGrid } from 'recharts';
const LineChart = () => {
    const studentData = [
        { id: 1, name: "Alice", mathMarks: 85, physicsMarks: 78, chemistryMarks: 92 },
        { id: 2, name: "Bob", mathMarks: 78, physicsMarks: 75, chemistryMarks: 80 },
        { id: 3, name: "Charlie", mathMarks: 92, physicsMarks: 88, chemistryMarks: 90 },
        { id: 4, name: "David", mathMarks: 65, physicsMarks: 70, chemistryMarks: 68 },
        { id: 5, name: "Emma", mathMarks: 88, physicsMarks: 82, chemistryMarks: 85 },
        { id: 6, name: "Frank", mathMarks: 72, physicsMarks: 68, chemistryMarks: 75 },
        { id: 7, name: "Grace", mathMarks: 80, physicsMarks: 75, chemistryMarks: 78 },
        { id: 8, name: "Henry", mathMarks: 95, physicsMarks: 90, chemistryMarks: 92 },
        { id: 9, name: "Isabel", mathMarks: 83, physicsMarks: 78, chemistryMarks: 80 },
        { id: 10, name: "Jack", mathMarks: 70, physicsMarks: 65, chemistryMarks: 72 }
      ];
      
    return (
        <div>
            <LChart width={500} height={400} data={studentData}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey={'name'}></XAxis>
                <YAxis ></YAxis>
            <Line  type="monotone" dataKey="mathMarks" stroke="#8884d8"></Line>
            <Line  type="monotone" dataKey="physicsMarks" stroke="red"></Line>
            <Line  type="monotone" dataKey="chemistryMarks" stroke="green"></Line>

    
            </LChart>
            
        </div>
    );
};

export default LineChart;