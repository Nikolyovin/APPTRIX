import { Button, Table } from 'antd'
import jsPDF from 'jspdf'
import { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestTimeSheet } from '../../redux/tasks-reducer'
import styles from './WorkItems.module.css'
import "jspdf-autotable";
import html2canvas from 'html2canvas'
import { addNewFont, callAddFont } from '../../fonts/ofont.ru_Hero-normal'
import { useReactToPrint } from 'react-to-print'


const WorkItems = () => {
  const dispatch = useDispatch()
  const workItems = useSelector(state => state.tasks.workItems)
  console.log('workItems:', workItems);

  const [ isImport, setIsImport ] = useState(false)

  useEffect(() => {
    dispatch(requestTimeSheet())
  }, [ ])

  const onClick = () => {
    setIsImport(!isImport)
  }

  const columns = [
    {
      title: 'Имя пользователя',
      dataIndex: [ 'author', 'name' ],
      key: 'name',
    },
    {
      title: 'Затраченное время',
      dataIndex: [ 'duration', 'presentation' ],
      key: 'duration',
    },
    {
      title: 'WorkItemsId',
      dataIndex: 'id',
      key: 'id',
    },
        
  ]
  const exportPDF = () => {
    addNewFont()
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);
    console.log(doc.getFontList())
    doc.setFont('Hero', 'normal')

    doc.setFontSize(15);

    const title = "My Awesome Report";
    const headers = [["NAME", "DURATION"]];

    const data = workItems.map(elt=> [ elt.author.name, elt.duration.presentation ]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    }

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf")
  }

  const printDocument = () => {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
  }

  const componentRef = useRef();
  const handlePrint =  useReactToPrint({
    
    content: () => componentRef.current,
  }) 
  
  return (
    <div className = { styles.workItemsWrap }>
      <div id="divToPrint" className="mt4" >
        <Table 
          rowKey = "name" 
          dataSource = { workItems } 
          columns = { columns } 
          ref={componentRef}
          pagination 
        />
      </div>
      <Button onClick={printDocument}>Print</Button>
      <Button onClick={exportPDF}>Export PDF</Button>
      <Button onClick={handlePrint}>PrintNew</Button>

    </div>
  )
}

export default WorkItems