-- CreateTable
CREATE TABLE "Overlay" (
    "id" TEXT NOT NULL,
    "dataLive" JSONB NOT NULL,
    "dataStage" JSONB NOT NULL,

    CONSTRAINT "Overlay_pkey" PRIMARY KEY ("id")
);
