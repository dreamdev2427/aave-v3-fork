import { ReactNode } from 'react';
import Image from 'next/image';
import { Box, CircularProgress, Paper, PaperProps, Typography } from '@mui/material';
import { Trans } from '@lingui/macro';
import { ConnectWalletButton } from './WalletConnection/ConnectWalletButton';

const walletBgUrl = 'https://ik.imagekit.io/cykpetgtn/walletbg.png'
const logoUrl = 'https://ik.imagekit.io/cykpetgtn/logo.png'
// const walletBgUrl = '/walletbg.png'
// const logoUrl = '/logo.png'

interface ConnectWalletPaperProps extends PaperProps {
  loading?: boolean;
  description?: ReactNode;
}

export const ConnectWalletPaper = ({
  loading,
  description,
  sx,
  ...rest
}: ConnectWalletPaperProps) => {
  return (
    <Paper
      {...rest}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '40px',
        p: 4,
        flex: 1,
        ...sx,
      }}
    >
      <Image 
        src={walletBgUrl} 
        width={0} 
        height={0} 
        layout="fill" 
        style={{ opacity: '0.2' }} 
        alt="" 
        unoptimized
      />
      <Box>
        <Image src={logoUrl} width={200} height={200} alt={''} unoptimized/>
      </Box>
      <>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <Typography variant="h2" sx={{ mb: 2 }}>
              <Trans>Please, connect your wallet</Trans>
            </Typography>
            <Typography sx={{ mb: 6 }} color="text.secondary">
              {description || (
                <Trans>
                  Please connect your wallet to see your supplies, borrowings, and open positions.
                </Trans>
              )}
            </Typography>
            <ConnectWalletButton />
          </>
        )}
      </>
    </Paper>
  );
};
