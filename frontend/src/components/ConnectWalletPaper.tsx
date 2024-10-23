import { ReactNode } from 'react';
// import Image from 'next/image';
import { Box, CircularProgress, Paper, PaperProps, Typography } from '@mui/material';
import { Trans } from '@lingui/macro';

// import LandingGhost from '/public/logo.png';
// import WalletBg from '/public/walletbg.png';

import { ConnectWalletButton } from './WalletConnection/ConnectWalletButton';

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
      <img src={`/walletbg.png`} width = "100%" height="100%" style={{ opacity: '0.2' }} alt='' />
      {/* <Image src='/walletbg.png' width={0} height={0} layout="fill" style={{ opacity: '0.2' }} alt="" /> */}
      <Box>
        <img src={`/walletbg.png`} width = "200px" height="200px" alt='' />
        {/* <Image src='/logo.png' width={200} height={200} alt={''} /> */}
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
