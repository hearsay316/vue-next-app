<template>
  <div class="son">
    fffff{{ c }}
    <button @click="printRepo">点击保存生成word</button>
  </div>
</template>

<script>
import * as docx from "docx";
import { saveAs } from "file-saver";
export default {
  name: "son",
  props: ["c"],
  setup(props) {
    console.log(props.c);
    function printRepo() {
      let doc = new docx.Document();

      // const mimeType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

      const table = new docx.Table({
        rows: [
          new docx.TableRow({
            children: [
              new docx.TableCell({
                children: [new docx.Paragraph("Hello")]
              }),
              new docx.TableCell({
                children: []
              })
            ]
          }),
          new docx.TableRow({
            children: [
              new docx.TableCell({
                children: []
              }),
              new docx.TableCell({
                children: [new docx.Paragraph("World")]
              })
            ]
          })
        ]
      });
      const paragraphs = new docx.Paragraph({
        text: "Paragraph with spacing before",
        spacing: {
          before: 200
        }
      });
      const name = new docx.TextRun({
        text: "Name:",
        bold: true,
        font: "Calibri",
        allCaps: true
      });
      const paragraph = new docx.Paragraph({
        // text: "Hello World",
        // alignment: docx.AlignmentType.CENTER,
        // heading: docx.HeadingLevel.HEADING_1
        // alignment: AlignmentType.CENTER,
        children: [
          new docx.TextRun({
            text: "Some monospaced contentbgbgbgbgbgb",
            font: {
              name: "Monospace"
            },
            size: 28,
            bold: true,
            center: true
          })
        ],
        alignment: docx.AlignmentType.CENTER
      });

      doc.addSection({
        children: [table, paragraph, paragraphs]
      });

      docx.Packer.toBlob(doc).then(blob => {
        console.log(blob);
        saveAs(blob, "example.docx");
        console.log("Document created successfully");
      });
    }
    return {
      printRepo
    };
  }
};
</script>

<style scoped></style>
