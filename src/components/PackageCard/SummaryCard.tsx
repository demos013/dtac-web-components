import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import React, { FC } from 'react'
import PackageCardBase from './index'
import { PackageCardBaseProps, PackageCardItemProps, SummaryCardItemProps } from './package-card'
import PackageCardItem from './PackageCardItem'
import SummaryCardItem from './SummaryCardItem'
const useStyles = makeStyles({
  summarycard_root: {
    '& > div > p': {
      color: '#1A1A1A',
      fontWeight: 400,
    },
  },
})

const SummaryCard: FC<PackageCardBaseProps> & {
  Item?: FC<SummaryCardItemProps>
  ExpandItem?: FC<PackageCardItemProps>
} = (props) => {
  const {
    header,
    align,
    headerBackgroundColor = '#E7EEF4',
    items,
    rightBottom,
    leftBottom,
    expands,
    isExpands,
    expandsItems,
  } = props
  const classes = useStyles()
  return (
    <PackageCardBase
      className={classes.summarycard_root}
      header={header}
      headerBackgroundColor={headerBackgroundColor}
      rightBottom={rightBottom}
      leftBottom={leftBottom}
      expands={expands}
      isExpands={isExpands}
      expandsItems={expandsItems}
      align={align}
    >
      <div>
        <Grid container spacing={2}>
          {items}
        </Grid>
      </div>
    </PackageCardBase>
  )
}

SummaryCard.Item = SummaryCardItem
SummaryCard.ExpandItem = PackageCardItem
export default SummaryCard
