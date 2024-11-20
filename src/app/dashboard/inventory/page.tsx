import { Box, Button, Card, Divider, Grid2, TextField, Typography } from '@mui/material'
import { AddRounded } from '@mui/icons-material'
import InventoryTable from '@/components/inventory-table'

const InventoryPage = () => {
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
              <Typography>Inventory</Typography>
              <Box display={'flex'} alignItems={'center'} gap={2} p={0}>
                <TextField
                  variant={'outlined'}
                  size={'small'}
                  margin={'dense'}
                  fullWidth={false}
                  label={'Search'}
                />
                <Button
                  variant={'contained'}
                  size={'small'}
                  endIcon={<AddRounded />}
                >
                  Add Item
                </Button>
              </Box>
            </Box>
            <Divider sx={{ my: 1 }} />
            <InventoryTable />
          </Grid2>
        </Grid2>
      </Card>
    </Box>
  )
}

export default InventoryPage
