import {
  Box, Button,
  Card,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid2,
  Radio,
  RadioGroup,
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
            <Box
              display={'flex'}
              alignItems={'center'}
              gap={2}
            >
              <FormControl>
                <RadioGroup row={true} name={'order_type'}>
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
              <Button size={'small'} variant={'contained'} color={'error'}>View KOT</Button>
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
                <TextField id={'price'} />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor={'total'}>Total</FormLabel>
                <TextField id={'total'} />
              </FormControl>
            </Box>
          </Grid2>
        </Grid2>
      </Card>
    </Box>
  )
}

export default BillingPage
