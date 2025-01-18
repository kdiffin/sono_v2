import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#f8f9fa',
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    border: '6px solid #4CAF50',
    borderRadius: 15,
    padding: 40,
    width: '90%',
    textAlign: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 15,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  subHeader: {
    fontSize: 16,
    color: '#7F8C8D',
    marginBottom: 40,
  },
  participantName: {
    fontSize: 36,
    fontWeight: 'bold',
    paddingBottom: 4,
    borderBottom: 2,
    borderColor:  '#4CAF50',
    color: '#4CAF50',
    marginBottom: 20,
  },
  body: {
    fontSize: 14,
    lineHeight: 1.8,
    color: '#34495E',
    marginBottom: 30,
  },
  auraPoints: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
  },
  footer: {
    fontSize: 12,
    color: '#7F8C8D',
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 40,
    alignItems: "center",
    width: "100%"
  },
 
  signatureBlock: {
    textAlign: 'center',
    width: '40%',
  },
  line: {
    borderTop: '1px solid #34495E',
    marginVertical: 10,
    width: '100%',
  },
});

// Create Certificate Component
const Certificate = ({ participantName, eventName, auraPoints, author }: { participantName: string, eventName: string, auraPoints: string, author: string }) => (
  <Document>
    <Page size={[841.89, 595.28]} style={styles.page}>
      <View style={styles.border}>
        <Text style={styles.header}>Certificate of Participation</Text>
        <Text style={styles.subHeader}>This is to certify that</Text>
        <Text style={styles.participantName}>{participantName}</Text>
        <Text style={styles.body}>
          Has demonstrated exceptional participation and dedication in the event{' '}
          <Text style={{ fontWeight: 'bold', color: '#4CAF50' }}>{eventName}</Text>, organized by{' '}
          <Text style={{ fontWeight: 'bold', color: '#2C3E50' }}>{author}</Text>.
        </Text>
        <Text style={styles.auraPoints}>Aura Points Earned: {auraPoints}</Text>
       
        <Text style={styles.footer}>
            <Text>

          Issued on {new Date().toLocaleDateString()}.
            </Text>

        </Text>
          <Text style={{ ...styles.footer}}>© 2025 SONO. All rights reserved.</Text>
      </View>
    </Page>
  </Document>
);

export default Certificate;
