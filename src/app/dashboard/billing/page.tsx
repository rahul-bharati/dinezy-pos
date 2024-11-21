import {
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid2,
  Paper,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material'

const BillingPage = () => {
  return (
    <Box>
      <Card>
        <Grid2 container spacing={0} columns={12}>
          <Grid2 size={12}>
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <Typography>Billing</Typography>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box display={'flex'} alignItems={'center'} gap={2}>
              <FormControl>
                <RadioGroup row={true} name={'order_type'} value={'dine_in'}>
                  <FormControlLabel
                    control={<Radio />}
                    label={'Dine In'}
                    value={'dine_in'}
                    defaultChecked={true}
                  />
                  <FormControlLabel
                    control={<Radio />}
                    label={'Pick Up'}
                    value={'pick_up'}
                  />
                  <FormControlLabel
                    control={<Radio />}
                    label={'Delivery'}
                    value={'delivery'}
                  />
                </RadioGroup>
              </FormControl>
              <FormControl>
                <TextField id={'table_number'} placeholder={'Table No'} />
              </FormControl>
              <FormControl>
                <TextField id={'table_number'} placeholder={'No of People'} />
              </FormControl>
              <Button size={'small'} variant={'contained'} color={'error'}>
                View KOT
              </Button>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box display={'flex'} alignItems={'center'} gap={2}>
              <FormControl>
                <FormLabel htmlFor={'customer_name'}>Customer Name</FormLabel>
                <TextField id={'customer_name'} />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor={'customer_contact'}>Mobile No.</FormLabel>
                <TextField id={'customer_contact'} />
              </FormControl>
            </Box>
            <Box display={'flex'} alignItems={'center'} gap={2} mt={2}>
              <FormControl>
                <FormLabel htmlFor={'customer_address_1'}>Address</FormLabel>
                <TextField id={'customer_address_1'} />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor={'customer_locality'}>Locality</FormLabel>
                <TextField id={'customer_locality'} />
              </FormControl>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box display={'flex'} alignItems={'center'} gap={1}>
              <FormControl>
                <FormLabel htmlFor={'item'}>Item</FormLabel>
                <TextField id={'item'} />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor={'special_note'}>Special Note</FormLabel>
                <TextField id={'special_note'} />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor={'qty'}>Quantity</FormLabel>
                <TextField id={'qty'} />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor={'price'}>Price</FormLabel>
                <TextField id={'price'} disabled={true} />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor={'total'}>Total</FormLabel>
                <TextField id={'total'} disabled={true} />
              </FormControl>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          border: '1px solid black',
                          backgroundColor: 'gray',
                        }}
                      >
                        Item
                      </TableCell>
                      <TableCell
                        sx={{
                          border: '1px solid black',
                          backgroundColor: 'gray',
                        }}
                      >
                        Special Note
                      </TableCell>
                      <TableCell
                        sx={{
                          border: '1px solid black',
                          backgroundColor: 'gray',
                        }}
                      >
                        Quantity
                      </TableCell>
                      <TableCell
                        sx={{
                          border: '1px solid black',
                          backgroundColor: 'gray',
                        }}
                      >
                        Price
                      </TableCell>
                      <TableCell
                        sx={{
                          border: '1px solid black',
                          backgroundColor: 'gray',
                        }}
                      >
                        Total
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ border: '1px solid gray' }}>
                        Item 1
                      </TableCell>
                      <TableCell
                        contentEditable={true}
                        sx={{ border: '1px solid gray' }}
                      >
                        Special Note 1
                      </TableCell>
                      <TableCell
                        contentEditable={true}
                        sx={{ border: '1px solid gray' }}
                      >
                        1
                      </TableCell>
                      <TableCell
                        contentEditable={true}
                        sx={{ border: '1px solid gray' }}
                      >
                        100
                      </TableCell>
                      <TableCell sx={{ border: '1px solid gray' }}>
                        100
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ border: '1px solid gray' }}>
                        Item 2
                      </TableCell>
                      <TableCell
                        contentEditable={true}
                        sx={{ border: '1px solid gray' }}
                      >
                        Special Note 2
                      </TableCell>
                      <TableCell
                        contentEditable={true}
                        sx={{ border: '1px solid gray' }}
                      >
                        2
                      </TableCell>
                      <TableCell
                        contentEditable={true}
                        sx={{ border: '1px solid gray' }}
                      >
                        200
                      </TableCell>
                      <TableCell sx={{ border: '1px solid gray' }}>
                        400
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box display={'flex'} alignItems={'center'} gap={2} mt={2} justifyContent={'flex-end'}>
              <Typography variant={'h4'}>Sub Total: </Typography>
              <Typography variant={'h4'}>500</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box display={'flex'} alignItems={'flex-end'} gap={2} mt={2} justifyContent={'flex-end'}>
              <Button size={'small'} variant={'contained'} color={'warning'}>Apply Discount</Button>
              <FormControl>
                <FormLabel htmlFor={'delivery_charges'}>Delivery Charges</FormLabel>
                <TextField id={'delivery_charges'} />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor={'packaging_charges'}>Packaging Charges</FormLabel>
                <TextField id={'packaging_charges'} />
              </FormControl>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box display={'flex'} alignItems={'center'} gap={2} mt={2} justifyContent={'flex-end'}>
              <Button size={'small'} variant={'contained'} color={'error'}>Remove Discount</Button>
              <Typography variant={'h4'}>Applied Discount: </Typography>
              <Typography variant={'h4'}>100</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box display={'flex'} alignItems={'center'} gap={2} mt={2} justifyContent={'flex-end'}>
              <Typography variant={'h4'}>Total: </Typography>
              <Typography variant={'h4'}>500</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box display={'flex'} alignItems={'center'} gap={2} mt={2} justifyContent={'flex-end'}>
              <Button size={'small'} variant={'contained'} color={'warning'}>KOT & Print</Button>
              <Button size={'small'} variant={'contained'} color={'info'}>Save & Print</Button>
              <Button size={'small'} variant={'contained'} color={'error'}>Settle</Button>
            </Box>
          </Grid2>
        </Grid2>
      </Card>
    </Box>
  )
}

export default BillingPage
