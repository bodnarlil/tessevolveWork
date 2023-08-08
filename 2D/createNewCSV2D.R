# read in all the CSVs for 2D
CF1 <- read.csv('coords_CF1_2D.csv')
CF2 <- read.csv('coords_CF2_2D.csv')
shubert <- read.csv('coords_shubert_2D.csv')
vincent <- read.csv('coords_vincent_2D.csv')

# create the name of the file
fileCF1 <- "CF1"
fileCF2 <- "CF2"
fileShubert <- "shubert"
fileVincent <- "vincent"

# add the new column filling everything with the name set above
CF1$file <- fileCF1
CF2$file <- fileCF2
shubert$file <- fileShubert
vincent$file <- fileVincent

# save them all as new files
write.csv(CF1, "updated_CF1_2D.csv", row.names = FALSE)
write.csv(CF2, "updated_CF2_2D.csv", row.names = FALSE)
write.csv(shubert, "updated_shubert_2D.csv", row.names = FALSE)
write.csv(vincent, "updated_vincent_2D.csv", row.names = FALSE)

# combine the new .csv files
combined_2D <- rbind(CF1, CF2, shubert, vincent)

# add the new column specifying 2D to the combined .csv
combined_2D$dimension <- "2D"

# save as csv
write.csv(combined_2D, "combined_data_2D.csv", row.names = FALSE)