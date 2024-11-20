'use client'

import { Grid2 } from '@mui/material'
import { useState } from 'react'
import {
  OutletDocumentForm,
  OutletForm,
  OwnerForm,
} from '@/components/outlet-form'

const AddNewOutlet = () => {
  const [step, setStep] = useState(1)

  const handleNext = () => {
    setStep(step + 1)

    if (step === 3) {
      // submit form
    }
  }

  return (
    <Grid2
      container={true}
      spacing={2}
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        mt: 10,
      }}
    >
      <Grid2 size={4}>
        {step === 1 && <OutletForm handleNext={handleNext} />}
        {step === 2 && <OwnerForm handleNext={handleNext} />}
        {step === 3 && <OutletDocumentForm handleNext={handleNext} />}
      </Grid2>
    </Grid2>
  )
}

export default AddNewOutlet
